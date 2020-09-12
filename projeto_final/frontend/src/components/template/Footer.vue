<template>
    <footer class="footer">
        <span>Feito com <i class="fa fa-heart"></i> por Lucas Monteiro</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }

    .footer span i {
        color: #d81414;
    }
</style>