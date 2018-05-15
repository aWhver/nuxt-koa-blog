/**
 * Created by juntong on 2018/5/15.
 */
export default ({store, error}) => {
  if (!store.state.authUser) {
    error({
      message: 'You do not have permission to enter the route, please log in',
      statusCode: 403
    })
  }
}
