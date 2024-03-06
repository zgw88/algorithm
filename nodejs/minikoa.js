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


  function composesss(middlewares) {
    return ctx => {
        const dispatch = (i) => {
            let middleware = middlewares[i]
            if(i === middlewares.length) {
                return
            }

            return middleware(ctx, ()=> dispatch(i+1))
        }
        return dispatch(0)
    }
  }


  function compo(mms) {
    return ctx =>{
        const dispatch = (i) =>{
            const mm = mms[i]
            if(i === mms.length) {
                return
            }
            return mm(ctx, () =>dispatch(i+1))
        }

        return dispatch(0)
    }
  }