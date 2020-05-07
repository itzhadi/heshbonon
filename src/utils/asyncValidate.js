const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    // if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
    //   throw {username: 'That username is taken'}

    if(!values.outputDescription) {
        throw {outputDescription :'אנא הכנס תיאור'};
    }

    if(!values.outputAmount){
        throw {outputAmount :'אנא הכנס סכום'};
    }

    })
}

export default asyncValidate;