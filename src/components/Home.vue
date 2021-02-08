<template lang="pug">
section.view.view--home
	.hero
		.hero__inner
			h1.hero__title Hello.
			h2.hero__subtitle This is a subtitle.
			p.hero__copy Sit amet luctus venenatis lectus magna. Placerat duis ultricies lacus sed turpis. Tempus imperdiet nulla malesuada pellentesque elit.
		.hero__img
			img(src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
	.view__intro
		.view__inner
			.view__intro-img
				img(src="https://images.unsplash.com/photo-1612434995720-89c1537a3009?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
			h2.view__intro-title This is the homepage
			p.view__intro-copy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit. Eget sit amet tellus cras. Ornare arcu odio ut sem. Libero id faucibus nisl tincidunt eget. Sit amet luctus venenatis lectus magna. Placerat duis ultricies lacus sed turpis. Tempus imperdiet nulla malesuada pellentesque elit. Sed augue lacus viverra vitae congue eu consequat ac. Turpis tincidunt id aliquet risus feugiat. Eu facilisis sed odio morbi. Sapien eget mi proin sed libero enim sed. Justo eget magna fermentum iaculis eu. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Gravida cum sociis natoque penatibus. Fermentum iaculis eu non diam.

			p.view__intro-copy Enim ut sem viverra aliquet eget sit. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Lectus quam id leo in vitae. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Eget est lorem ipsum dolor sit amet. A diam sollicitudin tempor id eu nisl nunc mi. A scelerisque purus semper eget duis at tellus at. Aliquet nec ullamcorper sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Vestibulum morbi blandit cursus risus at ultrices. Tempor commodo ullamcorper a lacus. Aliquam faucibus purus in massa. Iaculis nunc sed augue lacus viverra.

	Footer
</template>

<script>
import Footer from '@/components/Footer';

export default {
	name: 'Home',
	components: {
		Footer
	}
}
</script>

<style lang="scss">

</style>