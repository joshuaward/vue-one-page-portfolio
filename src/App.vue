<template lang="pug">
button.hamburger(@click="navOpen = !navOpen" :class="{'is-open': navOpen}")
	span
nav.nav(:class="{'is-open': navOpen}")
	button.nav__link(@click="changeState('home')" type="button") Home
	button.nav__link(@click="changeState('projects')" type="button") Projects
	button.nav__link(@click="changeState('find')" type="button") Find Me
	

transition-group(name="section" tag="main")
	Home(v-if="page === 'home'" key="home")
	Projects(v-if="page === 'projects'" key="projects")
	Find(v-if="page === 'find'" key="find")
	//- .loading(v-else) Loading...
//- Footer
</template>

<script>
// import Vuex from 'vuex'
// import Store from '@/store'
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Find from '@/components/Find';
import Footer from '@/components/Footer';

export default {
	name: 'App',
	components: {
		Home,
		Projects,
		Find,
		Footer
	},
	data() {
		return {
			page: 'home',
			navOpen: false,
		}
	},
	computed: {},
	methods: {
		changeState(page) {
			this.page = page
			this.navOpen = false
		}
	},
	mounted() {}
}
</script>

<style lang="scss">
*,
*:before,
*:after {
	box-sizing: border-box;
	outline: none;
}

html {
	font-family: $fontFamilyBase;
	font-size: 16px;
	font-smooth: auto;
	font-weight: 300;
	line-height: 1.5;
	color: $text;
	scroll-behavior: smooth;
}

body {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	margin: 0;
	background-color: $slate;
	overflow: hidden;
	z-index: 0;
}

.hamburger {
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 75px;
	height: 75px;
	background-color: rgba($greenSheen,0.5);
	border: 0;
	z-index: 9999;
	span {
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		width: 30px;
		height: 3px;
		background-color: $eggshell;
		transform: translate(-50%,-50%);
		transition: $base-duration ease;
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			display: inline-block;
			width: 30px;
			height: 3px;
			background-color: $eggshell;
			transition: $base-duration ease;
		}
		&::before {
			transform: translateY(-8px);
		}
		&::after {
			transform: translateY(8px);
		}
	}
	&.is-open {
		background-color: rgba($terraCotta,0.5);
		span {
			background-color: transparent;
			transition: $base-duration ease;
			&::before {
				transform: translateY(-0px) rotate(45deg);
				transition: $base-duration ease;
			}
			&::after {
				transform: translateY(0px) rotate(-45deg);
				transition: $base-duration ease;
			}
		}
	}
}

.nav {
	position: fixed;
	top: 75px;
	right: 0rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	transform: translateX(100%);
	transition: $base-duration ease;
	z-index: 9999;
	&.is-open {
		transform: translateX(0%);
		.nav__link {
			transform: translateX(0%);
			@for $i from 1 through 7 {
				&:nth-child(#{$i}) {
					transition-delay: $base-duration * ($i * 0.25);
				}
			}
		}
	}
	&__link {
		display: inline-block;
		padding: 0.625rem 1.25rem;
		background-color: rgba($terraCotta,0.9);
		border: 0;
		margin-top: 1px;
		// border-right: 1rem solid $greenSheen;
		transform: translateX(100%);
		transition: $base-duration ease;
		color: $deepChampagne;
		font-family: $fontFamilyHeadings;
		font-size: 2.5rem;
		font-weight: 600;
		text-align: right;
		text-decoration: none;
		// text-transform: uppercase;
		&.is-active {
			background-color: $terraCotta;
			color: $white;
		}
	}
}

.view {
	position: absolute;
	top: 50%;
	left: 50%;
	width: calc(100vw - 2rem);
	height: calc(100vh - 2rem);
	// margin: 1rem;
	background-color: rgba($white,0.8);
	// box-shadow: 0 0 0.625rem rgba($black, 0.2);
	opacity: 1;
	transform: translate(-50%,-50%);
	transition: $base-duration ease;
	overflow-y: scroll;
	&__inner {
		@include container;
	}
	
	&__intro {
		@include verticalSpacing;
		&-img {
			position: relative;
			box-shadow: 0 0 20px rgba($black, 0.2);
			&::after {
				content: '';
				display: block;
				padding-bottom: 56.25%;
			}
			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	&.section-enter {
		opacity: 1;
		transform: translate(0%, -50%);
		transition: $base-duration ease;
	}
	&.section-enter-active {
		opacity: 0;
		transform: translate(-100%, -50%);
		transition: $base-duration ease;
	}
	&.section-leave-active {
		opacity: 0;
		transform: translate(100%, -50%);
		transition: $base-duration ease;
	}
	&.section-leave-to {
		opacity: 1;
		transform: translate(0%, -50%);
		transition: $base-duration ease;
	}
}

.hero {
	position: relative;
	padding-top: 5rem;
	padding-bottom: 5rem;
	overflow: hidden;
	&__inner {
		position: relative;
		width: 90%;
		margin: 0 auto;
		z-index: 1;
	}
	&__title {
		margin: 0 0 1rem;
		transform: translateX(-5px);
		color: $white;
		font-size: 72px;
		line-height: 1;
		&::before {
			content: '';
			position: absolute;
			top: -20px;
			left: 5px;
			width: 55px;
			height: 5px;
			background-color: $terraCotta;
		}
	}
	&__subtitle {
		position: relative;
		margin: 0 0 1rem;
		color: $deepChampagne;
	}
	&__copy {
		color: $white;
		font-size: 0.875rem;
		font-weight: 400;
	}
	&__img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: 0;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			// background-color: rgba($slate,0.7);
			background: rgb(61,64,91);
			background: linear-gradient(135deg,
				rgba($slate,1) 10%,
				rgba($slate, 0.8) 60%,
				rgba($slate,0) 100%
			);
			z-index: 1;
		}
		&::after {
			display: block;
			padding-bottom: 56.25%;
		}
		img {
			// position: absolute;
			// top: 0;
			// left: 0;
			// right: 0;
			// bottom: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			.view--find & {
				transform: scaleX(-1);
			}
		}
	}
}


</style>
