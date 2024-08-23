function App() {
  return (
    <>
      <div class="h-screen">
        <div id="outer1" class="flex h-4/5 bg-black ">
          <div id="1" class=" w-1/3 bg-slate-900  mr-2 ">
            <div class=" bg-slate-700 hover:bg-yellow-600 h-1/5 m-3 pt-7 rounded-2xl">
              <div class=" h-24 w-24 ml-10 ">
                <div class="flex">
                  <img
                    src="\src\5544294.png"
                    alt="home"
                    class="  h-10 w-10  "
                  />
                  <label
                    htmlFor="home"
                    class="text-xl text-white font-bold ml-4"
                  >
                    Home
                  </label>
                </div>
                <div class="flex mt-2">
                  <img src="\src\images.png" alt="home" class="  h-10 w-10  " />
                  <label htmlFor="home">Home</label>
                </div>
              </div>
            </div>
            <div class="bg-slate-700 hover:bg-red-600 h-3/4 m-3 rounded-2xl">
              2
            </div>
          </div>
          <div id="2" class=" w-screen bg-slate-900  mr-2">
            2
          </div>
          <div id="3" class=" w-1/4 bg-slate-900 ">
            3
          </div>
        </div>
        <div id="outer2" class=" h-1/5 bg-yellow-400 ">
          4
        </div>
      </div>
    
    </>
  );
}

export default App;
