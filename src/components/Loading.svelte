<div class="loading__wrapper">
    <div class="loading">
        <img src="parcho.png" alt="loader"/>
    </div>
</div>
<style>
    @import '.././theme/variables.scss';

    @keyframes spinner{
        0% {
            transform: rotate(0deg);
        }
        30% {
            transform: rotate(180deg) scale(1.5);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }
    .loading__wrapper {
        display:flex;
        width: 100%;
        height: 100%;
        background: darken($primary, 10);
        justify-content: center;
        align-items: center;
        .loading {
            position: relative;
            display: flex;
            width: 100px;
            height: 100px;
            animation-name: spinner;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: ease;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
            }
        }
    }
</style>