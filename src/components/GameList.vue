<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-10 px-20 mt-10">

    <!-- ARKNIGHTS -->
    <router-link to="/game/arknights">
      <img 
        src="/src/assets/games/Arknights.png" 
        class="cursor-pointer w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <!-- UMA MUSUME -->
    <router-link to="/game/umamusume">
      <img 
        src="/src/assets/games/UmaMusume.png" 
        class="cursor-pointer w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <!-- P5X -->
    <router-link to="/game/p5x">
      <img 
        src="/src/assets/games/P5X.png" 
        class="cursor-pointer w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

    <!-- WUTHERING WAVES -->
    <router-link to="/game/wuwa">
      <img 
        src="/src/assets/games/Wuwa.png" 
        class="cursor-pointer w-40 h-40 md:w-48 md:h-48 rounded-xl shadow-xl object-cover mx-auto hover:scale-105 transition"
      />
    </router-link>

  </div>
</template>
