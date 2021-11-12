<template>
	<div>
		<div class="heroBox relative w-full flex justify-center items-center bg-white-linen-500">
			<div class="contact-box flex flex-col lg:flex-row bg-transparent lg:bg-cinnabar-500 h-2/3 w-full justify-center items-center text-center rounded-3xl">
				<div class="left hidden lg:flex w-1/2 h-full rounded-l-3xl"></div>
				<div class="right w-full lg:w-1/2">
					<h2 class="mb-2 text-2xl font-bold">Kontaktujte nás</h2>
					<input type="text" class="field" placeholder="Jméno">
					<input type="text" class="field" placeholder="Email">
					<input type="text" class="field" placeholder="Telefoní číslo">
					<textarea placeholder="zpráva" class="field"></textarea>
					<button class="btn w-full bg-light-black-500 text-cinnabar-500 border-none outline-none cursor-pointer rounded-full p-10">Odeslat</button>
				</div>
			</div>
		</div>
		<div class="container bg-cinnabar-500 mb-20 p-5 lg:p-20">
			<div class="w-4/5 flex flex-col justify-center items-center">
				<ul class="flex w-full justify-between text-white-linen-500 text-lg font-bold">
					<li>tel. +420 556 486 126</li>
					<li>E-mail cezka.pizza@seznam.cz</li>
					<li>Mate dotaz? info.pizza@seznam.cz</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.field{
    /* @apply w-full border-2 border-light-black-500 outline-none bg-white mb-6 rounded-xl; */
}
.heroBox{
	height: 115vh;
}
.contact-box{
	box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
    max-width: 950px;
}

.left{
	background: url("~assets/images/map.png") no-repeat center;
	background-size: cover;
}

.right{
	padding: 35px 50px;
}

h2{
	position: relative;
	padding: 0 0 10px;
}

h2:after{
	content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 6px;
    width: 50px;
    border-radius: 2px;
    background-color: #d72d2b;
}

.field{
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	transition: .3s;
}
textarea{
	min-height: 150px;
}

.btn{
	padding: 0.5rem 1rem;
	color: #fff;
	font-size: 1.1rem;
	transition: .3s;
}

.field:focus{
    border: 2px solid #d72d2b;
    background-color: #fff;
}

@media screen and (max-width: 1024px){
    .contact-box {
        box-shadow: none;
    }
	
	.left{
		height: 200px;
	}
}
</style>