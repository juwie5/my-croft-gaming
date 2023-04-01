<template>
  <div>
    <Navbar />
    <main class="px-28 w-full">
      <section class="flex items-center justify-center mt-24">
        <div class="w-[734px]">
          <h1 class="text-amber-500 text-2xl font-serif font-semibold">Welcome to mycroft</h1>
          <div class="text-white text-[64px] w-[734px]">
            <p>DISCOVER A WORLD</p>
            <p>OF LOTTERY</p>
            <p>PLAY AND <span> WIN BIG</span></p>
          </div>
          <div class="flex font-sans text-3xl gap-4 font-bold text-center">
            <routerlink to="/play" class="bg-sky-500 rounded-lg w-[267px] py-3">Play Now</routerlink>
            <routerlink to="/learnmore" class="rounded-lg w-[267px] py-3 border-2 border-sky-500">Learn more</routerlink>
          </div>
        </div>
        <div>
          <img src="@/assets/media/img/slot.png" alt="Slot-777-image">
        </div>
      </section>
      <section class="flex justify-center mt-24 gap-8">
        <div>
          <img src="@/assets/media/img/we-are.png" alt="Who-are-we">
        </div>
        <div class="w-[808px] mt-8">
          <h3 class="font-sans text-5xl font-semibold">Who we are</h3>
          <p class="font-serif font-normal text-2xl pt-3">Welcome to Mycroft, your go-to destination for lotto and gaming
            fun! We are a dynamic and innovative company that is passionate about bringing you the best possible gaming
            experience. Whether you are a seasoned player or a newbie, Mycroft is the perfect place to satisfy your gaming
            cravings.</p>
          <p class="text-blue-700 text-sm pt-4">Learn more</p>
        </div>
      </section>
      <section class="mt-24">
        <h3 class="font-sans text-5xl font-semibold text-center">Latest Winners</h3>
        <div class="flex gap-3 text-center">
          <div class="mt-4">
            <div
              class="w-[313px] h-[421.1px] bg-gradient-to-r from-zinc-800 to-gray-700 rounded-xl flex flex-col items-center text-center">
              <div class="mt-16">
                <img src="@/assets/media/img/perm-4.png" alt="perm-4-image">
              </div>
              <div class="py-3">
                <p class="font-serif text-center">Game: Perm 4</p>
                <img src="@/assets/media/img/winner-tag.png" alt="winner-tag-image">
              </div>
              <div class="py-3">
                <div class="flex gap-4">
                  <p>Mr Jagaban</p>
                  <p>No: 11144555</p>
                </div>
                <div class="flex gap-4">
                  <p>Stake:500</p>
                  <p>Won:20,000</p>
                </div>
              </div>
              <div>
                <p class="font-sans py-2">12/11/2022</p>
                <routerlink to="/play" class="rounded-lg px-6 py-2 border-2 border-sky-500">Play Now</routerlink>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-[313px] h-[421.1px] bg-gradient-to-r from-zinc-800 to-gray-700 rounded-xl flex flex-col items-center">
              <div class="mt-16">
                <img src="@/assets/media/img/3-direct.png" alt="3-direct-image">
              </div>
              <div class="py-3">
                <p class="font-serif text-center">Game: 3 Direct</p>
                <img src="@/assets/media/img/winner-tag.png" alt="winner-tag-image">
              </div>
              <div class="py-3">
                <div class="flex gap-4">
                  <p>Mr Jagaban</p>
                  <p>No: 11144555</p>
                </div>
                <div class="flex gap-4">
                  <p>Stake:500</p>
                  <p>Won:20,000</p>
                </div>
              </div>
              <div>
                <p class="font-sans py-2">12/11/2022</p>
                <routerlink to="/play" class="rounded-lg px-6 py-2 border-2 border-sky-500">Play Now</routerlink>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-[313px] h-[421.1px] bg-gradient-to-r from-zinc-800 to-gray-700 rounded-xl flex flex-col items-center">
              <div class="mt-16">
                <img src="@/assets/media/img/ag-singles.png" alt="against-single-image">
              </div>
              <div class="py-3">
                <p class="font-serif text-center">Game: Against Singles</p>
                <img src="@/assets/media/img/winner-tag.png" alt="winner-tag-image">
              </div>
              <div class="py-3">
                <div class="flex gap-4">
                  <p>Mr Jagaban</p>
                  <p>No: 11144555</p>
                </div>
                <div class="flex gap-4">
                  <p>Stake:500</p>
                  <p>Won:20,000</p>
                </div>
              </div>
              <div>
                <p class="font-sans py-2">12/11/2022</p>
                <routerlink to="/play" class="rounded-lg px-6 py-2 border-2 border-sky-500">Play Now</routerlink>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-[313px] h-[421.1px] bg-gradient-to-r from-zinc-800 to-gray-700 rounded-xl flex flex-col items-center">
              <div class="mt-16">
                <img src="@/assets/media/img/first-ball.png" alt="first-ball-image">
              </div>
              <div class="py-3">
                <p class="font-serif text-center">Game: First ball</p>
                <img src="@/assets/media/img/winner-tag.png" alt="winner-image-tage">
              </div>
              <div class="py-3">
                <div class="flex gap-4">
                  <p>Mr Jagaban</p>
                  <p>No: 11144555</p>
                </div>
                <div class="flex gap-4">
                  <p>Stake:500</p>
                  <p>Won:20,000</p>
                </div>
              </div>
              <div>
                <p class="font-sans py-2">12/11/2022</p>
                <routerlink to="/play" class="rounded-lg px-6 py-2 border-2 border-sky-500">Play Now</routerlink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-24">
        <div>
          <h3 class="font-sans text-5xl font-semibold text-center pb-3">Today’s Games</h3>
          <div class="flex gap-4 items-center justify-center bg-sky-500 w-1/4 py-2 text-center rounded-lg mx-auto font-serif font-extrabold text-2xl">
            <div class="flex gap-2 items-center  border-r">
              <img src="@/assets/media/icons/timer.svg" alt="time-icon">
              <p class="pr-3">4:34:21</p>
            </div>
            <div>
              <routerlink to="play">Play Now</routerlink>
            </div>
          </div>
          <div class="flex gap-4 pt-9">
            <div class="w-[313px] h-[247px] bg-gray-700 rounded-[20px] relative">
              <div class="float-right p-1 bg-green-900 z-20 curve">
                <p>Open</p>
              </div>
              <img class="mx-auto top-[-11px]" src="@/assets/media/img/first-ball.png" alt="first-ball">
              <div class="px-5 font-serif">
                <p class="font-semibold text-2xl">First Ball</p>
                <p class="text-base font-medium">Game closes 10:00pm</p>
              </div>
              <routerlink to="/play" class="w-[155px] bg-sky-500 rounded-lg py-3 px-6 bottom-[-35px] left-[30%] font-bold mx-auto">Play Now</routerlink>
            </div> 
            <div class="w-[313px] h-[247px] bg-neutral-800 rounded-[20px] relative">
              <div class="float-right p-1 bg-green-900 z-20 curve">
                <p>Open</p>
              </div>
              <img class="mx-auto top-[-11px]" src="@/assets/media/img/perm-4.png" alt="first-ball">
              <div class="px-5 font-serif">
                <p class="font-semibold text-2xl">Perm 4</p>
                <p class="text-base font-medium">Game closes 10:00pm</p>
              </div>
              <routerlink to="/play" class="w-[155px] bg-sky-500 rounded-lg py-3 px-6 bottom-[-35px] left-[30%] font-bold mx-auto">Play Now</routerlink>
            </div> 
            <div class="w-[313px] h-[247px] bg-gray-700 rounded-[20px] relative">
              <div class="float-right p-1 bg-green-900 z-20 curve">
                <p>Open</p>
              </div>
              <img class="mx-auto top-[-11px]" src="@/assets/media/img/3-direct.png" alt="first-ball">
              <div class="px-5 font-serif">
                <p class="font-semibold text-2xl">3 Direct</p>
                <p class="text-base font-medium">Game closes 10:00pm</p>
              </div>
              <routerlink to="/play" class="w-[155px] bg-sky-500 rounded-lg py-3 px-6 bottom-[-35px] left-[30%] font-bold mx-auto">Play Now</routerlink>
            </div> 
            <div class="w-[313px] h-[247px] bg-neutral-800 rounded-[20px] relative">
              <div class="float-right p-1 bg-green-900 z-20 curve">
                <p>Open</p>
              </div>
              <img class="mx-auto top-[-11px]" src="@/assets/media/img/ag-singles.png" alt="first-ball">
              <div class="px-5 font-serif">
                <p class="font-semibold text-2xl">Against Singles</p>
                <p class="text-base font-medium">Game closes 10:00pm</p>
              </div>
              <routerlink to="/play" class="w-[155px] bg-sky-500 rounded-lg py-3 px-6 bottom-[-35px] left-[30%] font-bold mx-auto">Play Now</routerlink>
            </div> 
          </div>
        </div>
      </section>
      <section class="mt-24">
        <h3 class="font-sans text-4xl font-medium text-center">Get informed</h3>
        <div class="flex flex-col justify-center items-center">
          <div class="flex gap-4">
            <p>Phone: +2348084687449</p>
           <p>Address: 1 Ikeja street, Lagos, Nigeria</p>
          </div>
          <div class="input-group w-4/6">
            <input type="email" placeholder="Type your Email address here:" class="rounded-l-lg p-3 bg-transparent border border-white">
            <button class="border-2 border-sky-500 rounded-r-lg p-3">Subscribe</button>
          </div>
        </div>
      </section>
      <section class="my-24"> 
        <div class="flex justify-center gap-4">
         <img src="@/assets/media/logo/national-lottery-logo.svg" alt="">
         <img src="@/assets/media/logo/master-card.svg" alt="">
         <img src="@/assets/media/logo/visa-card.svg" alt="">
         <img src="@/assets/media/logo/lagos-logo.svg" alt="">
         <img src="@/assets/media/logo/verve-card.svg" alt="">
         <img src="@/assets/media/logo/interswitch-card.svg" alt="">
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<style lang="scss">

.curve {
  border-radius: 11.1786px 11.1786px 0px 11.1786px;
}

.input-group {
  display: flex;
  align-content: stretch;
  // height: 70px;
  border-radius: 10px;
  padding: 12px 0;
}

.input-group > input {
  flex: 1 0 auto;
}
</style>
