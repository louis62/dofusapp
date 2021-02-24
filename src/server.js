import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';
import { Pool } from 'pg';
import pgSession from 'connect-pg-simple';
import { decode } from 'jsonwebtoken';

const { PORT, NODE_ENV, DATABASE_URL, SECRET_KEY } = process.env;
const dev = NODE_ENV === 'development';

class PostgresqlService {
	constructor(){
	  this.pool = new Pool({
		connectionString: DATABASE_URL,
		ssl: {
		  rejectUnauthorized: false
		}
	  });
	}
	sessionHandler(session) {
	  const pgs = pgSession(session);
	  let conf = {
		conString: DATABASE_URL,
		schemaName: 'public',
		tableName: 'session',
	  }
	  if(NODE_ENV == 'production'){
		conf.pool = this.pool
	  }
	return new pgs(conf);
	}
  }
  
  const pgService = new PostgresqlService()

export default polka() // You can also use Express
	.use(
		session({
			secret: SECRET_KEY,
			resave: false,
			saveUninitialized: false,
			unset: 'destroy',
			cookie: {
			  domain: NODE_ENV == 'production' ? '.dofusapp.fr' : undefined,
			  maxAge: 31536000,
			  sameSite: NODE_ENV == 'production' ? 'none' : false,
			  secure: NODE_ENV == 'production'
			},
			store: pgService.sessionHandler(session)
		}),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		(req, res, next) => {
			const token = req.session.token
			const user = token ? decode(token, SECRET_KEY) : false
			
			return sapper.middleware({
			  session: () => {
				return {
					authenticated: !!user,
					user
				}
			  }
			})(req, res, next)
		  }
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
