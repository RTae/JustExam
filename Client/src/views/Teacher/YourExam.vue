<template>
  <div class="mb-96">
    <Header main="Your exam" button="+ New exam" to="NewExam" />
    <div class="grid grid-cols-4 gap-5 ml-40 mr-40 mt-20">
      <div @click="onClick('InsideYourExam')" v-for="box in boxlist" :key="box">
        <CardExam />
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header/Header.vue';
import CardExam from '@/components/Card/CardExam.vue';

export default {
  name: 'YourExam',
  components: {
    CardExam,
    Header,
  },
  data() {
    return {
      qlist: [],
      boxlist: 4,
    };
  },
  methods: {
    onClick(pageName) {
      this.$router.push({ name: pageName }).catch(() => true);
    },
  },
  mounted() {
    //
  },
};

</script>
