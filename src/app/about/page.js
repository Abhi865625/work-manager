async function takeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000)
    })
}

export default async function About(){
    throw new Error("This is manual error");
   await takeTime();
    return (
        <div>
            <h1>This is about page</h1>
        </div>
    )
 }