async function sleep(millis: number): Promise<void> {
    return new Promise((resolve, reject) => {
        let t = Date.now();
        
        setTimeout(() => {
            console.log(millis);
            resolve();
        }, millis)
    })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */