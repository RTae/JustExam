<template>
  <div class="mb-96">
    <Header main="Exam channel" button="+  New channel" to="NewChannelTeacher" />
    <div class="grid grid-cols-4 gap-5 ml-40 mr-40 mt-20">
      <div @click="onClick('InsideChannelTeacher')" v-for="box in boxlist" :key="box">
        <CardChannel
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import CardChannel from '@/components/Card/CardChannel.vue';

export default {
  name: 'ExamChannelTeacher',
  components: {
    Header,
    CardChannel,
  },
  data() {
    return {
      boxlist: 4,
    };
  },
  methods: {
  },
  mounted() {
    //
  },
};
</script>
