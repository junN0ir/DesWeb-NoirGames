<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-6 md:px-12 lg:px-20 mt-6 md:mt-10">

    <router-link to="/game/arknights">
      <img 
        src="/src/assets/games/Arknights.png" 
        class="cursor-pointer w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <router-link to="/game/umamusume">
      <img 
        src="/src/assets/games/UmaMusume.png" 
        class="cursor-pointer w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <router-link to="/game/p5x">
      <img 
        src="/src/assets/games/P5X.png" 
        class="cursor-pointer w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <router-link to="/game/wuwa">
      <img 
        src="/src/assets/games/Wuwa.png" 
        class="cursor-pointer w-full max-w-[180px] md:max-w-[200px] aspect-square rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

  </div>
</template>