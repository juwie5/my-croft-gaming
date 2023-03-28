<template>
  <div>
    <Navbar/>
    <main class="px-28 w-full">
     <section class="flex items-center justify-center mt-9">
        <div>
          <h1 class="text-amber-500">Welcome to mycroft</h1>
          <p class="text-white">DISCOVER A WORLD OF LOTTERY PLAY AND WIN BIG</p>
          <div>
            <button>Play Now</button>
            <button>Learn more</button>
          </div>
        </div>
        <div>
          <img src="@/assets/media/img/slot.png" alt="Slot-777-image">
        </div>
      </section>
      <section class="flex justify-center mt-9 gap-8">
        <div>
          <img src="@/assets/media/img/we-are.png" alt="Who-are-we">
        </div>
        <div class="w-[808px] mt-8">
          <h3 class="font-sans text-5xl font-semibold">Who we are</h3>
          <p class="font-serif font-normal text-2xl pt-3">Welcome to Mycroft, your go-to destination for lotto and gaming fun! We are a dynamic and innovative company that is passionate about bringing you the best possible gaming experience. Whether you are a seasoned player or a newbie, Mycroft is the perfect place to satisfy your gaming cravings.</p>
          <p class="text-blue-700 text-sm pt-4">Learn more</p>
        </div>
      </section>
      <section class="mt-9">
        <h3 class="font-sans text-5xl font-semibold text-center">Latest Winners</h3>
        <div>
          <div class="">

          </div>
        </div>
      </section>
    </main> 
  </div> 
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

</script>
