<template>
	<div>
		<v-navigation-drawer disable-resize-watcher app v-model="drawer" dark color="activePrimary" width="300" style="z-index: 1001">
			<v-list class="pa-0">
				<mobileAccountMenu/>
				<v-divider color="white"></v-divider>
				<v-list-group active-class="white--text" no-action value="true">
					<template v-slot:activator>
						<v-list-item-icon class="mr-1">
							<v-icon>theaters</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Фильмы</v-list-item-title>
					</template>
					<v-list-item @click>
						<v-list-item-icon class="mr-1">
							<v-icon>calendar_today</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Премьеры</v-list-item-title>
					</v-list-item>
					<v-list-item @click>
						<v-list-item-icon class="mr-1">
							<v-icon>home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Онлайн</v-list-item-title>
					</v-list-item>
					<v-list-item @click>
						<v-list-item-icon class="mr-1">
							<v-icon>collections</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Коллекции</v-list-item-title>
					</v-list-item>
				</v-list-group>
				<v-list-group active-class="white--text" no-action>
					<template v-slot:activator>
						<v-list-item-icon class="mr-2">
							<v-icon>tv</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Сериалы</v-list-item-title>
					</template>
					<v-list-item @click>
						<v-list-item-icon class="mr-1">
							<v-icon>calendar_today</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Премьеры</v-list-item-title>
					</v-list-item>
					<v-list-item @click>
						<v-list-item-icon class="mr-1">
							<v-icon>collections</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Коллекции</v-list-item-title>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app dense color="primary" :absolute="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl" style="z-index: 1000">
			<v-row class="mx-xs-n4 mx-md-auto">
				<v-col class="d-block d-md-none pl-0 pr-0" cols="1">
					<v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
				</v-col>
				<v-col class="ma-auto" cols="5" md="2" xl="1">
					<v-toolbar-title class="white--text title-name">MuloPoisk</v-toolbar-title>
				</v-col>
				<v-row class="d-none d-md-flex" md="8" xl="9">
					<v-menu content-class="no-border-radius" open-on-hover offset-y nudge-width="1">
						<template v-slot:activator="{ on }">
							<v-btn
								v-on="on"
								class="mt-auto mb-auto btn-class"
								color="primary"
								tile
								height="48px"
								elevation="0"
							>
								<v-list-item-icon class="mr-1 ma-auto" >
									<v-icon>theaters</v-icon>
								</v-list-item-icon>Фильмы
							</v-btn>
						</template>
						<v-list color="primary" dark class="pa-0 no-border-radius">
							<v-list-item @click>
								<v-list-item-icon class="mr-1">
									<v-icon>calendar_today</v-icon>
								</v-list-item-icon>
								<v-list-item-title>Премьеры</v-list-item-title>
							</v-list-item>
							<v-list-item @click>
								<v-list-item-icon class="mr-1">
									<v-icon>home</v-icon>
								</v-list-item-icon>
								<v-list-item-title>Онлайн</v-list-item-title>
							</v-list-item>
							<v-list-item @click>
								<v-list-item-icon class="mr-1">
									<v-icon>collections</v-icon>
								</v-list-item-icon>
								<v-list-item-title>Коллекции</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>

					<v-menu content-class="no-border-radius" open-on-hover offset-y nudge-width="1">
						<template v-slot:activator="{ on }">
							<v-btn
								v-on="on"
								class="mt-auto mb-auto btn-class"
								color="primary"
								tile
								height="48px"
								elevation="0"
							>
								<v-list-item-icon class="mr-1 ma-auto">
									<v-icon>tv</v-icon>
								</v-list-item-icon>Сериалы
							</v-btn>
						</template>
						<v-list color="primary" dark class="pa-0 no-border-radius">
							<v-list-item @click>
								<v-list-item-icon class="mr-1">
									<v-icon>calendar_today</v-icon>
								</v-list-item-icon>
								<v-list-item-title>Премьеры</v-list-item-title>
							</v-list-item>
							<v-list-item @click>
								<v-list-item-icon class="mr-1">
									<v-icon>collections</v-icon>
								</v-list-item-icon>
								<v-list-item-title>Коллекции</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<accountMenu/>
				</v-row>

				<v-col cols="6" class="ma-auto" md="2" xl="2">
					<v-text-field
						label="Поиск"
						single-line
						outlined
						hide-details
						dense
						class="search"
						background-color="#29B6F6"
						dark
						prepend-inner-icon="search"
					></v-text-field>
				</v-col>
			</v-row>
		</v-app-bar>
	</div>
</template>

<script>
import accountMenu from './navbar_components/account-menu'
import mobileAccountMenu from './navbar_components/account-menu-mobile'
export default {
	data: () => ({
		drawer: false
	}),
	components: {
		accountMenu,
		mobileAccountMenu
	}
};
</script>

<style lang="sass" scoped>
		.title-name
				font-family: 'Indie Flower'
				font-size: 30px
		.pl-50
			padding-left: 50px
		.btn-class
			text-transform: none 
			font-weight: normal
		.avatar-class
			min-width: 40px !important
		.mr-25
			margin-right: 25px
		.no-border-radius
			border-radius: 0 !important
		.v-list-group--no-action > .v-list-group__items > .v-list-item
			padding-left: 50px
		
</style>