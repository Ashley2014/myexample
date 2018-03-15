const router = new VueRouter({ ... })

const pageList = ['home', 'detail'];
router.beforeEach((to, from, next) => {
  const { name, query: { page } } = to;
  const needAddPage = pageList.indexOf(name) >= 0;
  if(page || !needAddPage){
    next();
    return;
  }
  const route = {
    ...to,
    query: {
      ...to.query,
      page: 1,
    }
  };
})