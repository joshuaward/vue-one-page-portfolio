<template lang="pug">
footer.footer
	.footer__inner
		nav.footer__nav.footer__nav--social
			a.footer__nav-link(href="")
				i.fab.fa-linkedin
				span.sr-only LinkedIn
			a.footer__nav-link(href="")
				i.fab.fa-codepen
				span.sr-only Codepen
			a.footer__nav-link(href="")
				i.fab.fa-github
				span.sr-only GitHub
			a.footer__nav-link(href="")
				i.fab.fa-untappd
				span.sr-only Untappd
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
.footer {
	// position: absolute;
	// bottom: 0;
	// left: 0;
	// right: 0;
	background-color: rgba($slate,0.8);
	&__inner {
		@include container;
	}
	&__nav {
		&--social {
			padding: 1.25rem;
			display: flex;
			align-items: center;
			a {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1 1 auto;
				color: $eggshell;
				font-size: 1.25rem;
				text-decoration: none;
			}
		}
	}
}
</style>