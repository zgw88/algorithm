function compose (middlewares) {
    return ctx => {
      const dispatch = (i) => {
        const middleware = middlewares[i]
        if (i === middlewares.length) {
          return
        }
        return middleware(ctx, () => dispatch(i+1))
      }
      return dispatch(0)
    }
  }


  function composes(middlewares) {
    return ctx => {
        const dispatch = (i) =>{
            const middleware = middlewares[i]
            if(i === middlewares.length) {
                return
            }

            return middleware(ctx, ()=> dispatch(i+1))
        }
        return dispatch(0)
    }
  }