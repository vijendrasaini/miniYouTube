function nav(){
    // console.log("hi")
    return `<div class="container-fluid pb-1">
                <div class="row mt-1">
                    <div class="col-3">
                        <span><i class="fab fa-youtube text-danger fs-1 ms-3"></i><span class="fs-2 fw-bold logo">YouTubes<sup class=" fs-5">IN</sup></span></span>
                    </div>
                    <div class="col-6 row">
                        <div class="col-10 col-form-label row">
                            <input type="text" id="seachBox" class="p-1 border-2 border" placeholder="Search">
                        </div>
                        <div class="col-2 pt-2 m-0">
                            <button id="searchButton" class="px-1 pb-1 border border-2 border-secondary border border-white bg-white">
                                <!-- Search -->
                                <span class=""><i class="fas fa-search fs-5"></i></span>
                            </button>
                            <span class="ms-3 "><i class="fas fa-microphone fs-4"></i></span>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="d-flex fs-5 pt-2 row px-5">
                            <div class="col-3">
                                <span><i class="fas fa-video"></i></span>
                            </div>
                            <div class="col-3"><span><i class="fas fa-th"></i></span></div>
                            <div class="col-3 "><span><i class="far fa-bell"></i></span></div>
                            <div class="col-3 fs-4 "><span><i class="fas fa-user-circle"></i></span></div>
                        </div>
                    </div>
                </div>
            </div>`
}
export default nav