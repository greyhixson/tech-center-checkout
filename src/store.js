const bannerStore = {
  title: '',
  buttonName: '',
  buttonIcon: 'mdi-home',
  buttonRoute: '/',
  setTitle(newTitle) {
    this.title = newTitle;
  },
  setButton(name, icon, route) {
    this.buttonName = name;
    this.buttonIcon = icon;
    this.buttonRoute = route;
  },
};

const userStore = {
  username: '',
  setUsername(username) {
    this.username = username;
  },
};

export { bannerStore, userStore };
