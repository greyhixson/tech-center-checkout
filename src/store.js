const userStore = {
  username: '',
  isAdmin: false,
  setUsername(username) {
    this.username = username;
  },
  setPermission(isAdmin) {
    this.isAdmin = isAdmin;
  },
};

const bannerStore = {
  title: '',
  buttonName: '',
  buttonIcon: '',
  buttonRoute: '/',
  setTitle(newTitle) {
    this.title = newTitle;
  },
  setButton(type) {
    if (type === 'Home') {
      this.buttonName = '';
      this.buttonIcon = 'mdi-home';
      if (userStore.isAdmin) {
        this.buttonRoute = '/AdminView';
      } else if (!userStore.isAdmin) {
        this.buttonRoute = '/UserView';
      }
    } else if (type === 'Sign Out') {
      this.buttonName = 'Sign Out';
      this.buttonIcon = '';
      this.buttonRoute = '/';
    } else if (type === 'Login') {
      this.buttonName = '';
      this.buttonIcon = '';
      this.buttonRoute = '/';
    }
  },
  setButtonRoute(route) {
    this.buttonRoute = route;
  },
};

export { bannerStore, userStore };
