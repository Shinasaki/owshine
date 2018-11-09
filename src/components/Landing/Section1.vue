<template>
  <div class="section1-landing section">
    <div class="container">
      <div class="brand">
        <div class="menu">
          <div class="">
            PROFILE <i class="fas fa-user-alt"></i>
          </div>
          <div class="">
            RACKING <i class="fas fa-signal"></i>
          </div>
          <div class="">
            WINRATE <i class="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div class='loader' :class="{'submit-action' : submitAction}">
          <svg xmlns="http://www.w3.org/2000/svg" width="850" height="850" viewBox="0 0 850 850">
            <g id='circles'>
              <circle class='bg' fill="none" stroke-width="10" stroke-miterlimit="10" cx="425" cy="425" r="400" />

              <circle class='fast' fill="none" stroke="#000" stroke-width="10" stroke-miterlimit="10" cx="425" cy="425" r="400" />

              <circle class='slow' fill="none" stroke-width="10" stroke-miterlimit="10" cx="425" cy="425" r="400" />
            </g>
            <g id='hexas'>
              <path d="M334.145 358.92c-2.7 1.56-7.12 1.56-9.82 0l-77.152-44.545c-2.7-1.56-4.91-5.386-4.91-8.504v-89.086c0-3.118 2.21-6.945 4.91-8.504l77.154-44.545c2.7-1.56 7.12-1.56 9.82 0l77.152 44.544c2.7 1.558 4.91 5.385 4.91 8.503v89.09c0 3.117-2.21 6.944-4.91 8.503l-77.155 44.544z" />

              <path d="M521.262 359.014c-2.7 1.56-7.12 1.56-9.82 0L434.29 314.47c-2.7-1.56-4.91-5.387-4.91-8.505v-89.087c0-3.118 2.208-6.945 4.91-8.504l77.153-44.545c2.7-1.56 7.12-1.56 9.82 0l77.152 44.542c2.7 1.56 4.91 5.386 4.91 8.504v89.09c0 3.117-2.21 6.944-4.91 8.503l-77.153 44.544z" />

              <path d="M614.9 521.2c-2.7 1.56-7.118 1.56-9.818 0l-77.153-44.543c-2.7-1.56-4.91-5.386-4.91-8.504v-89.088c0-3.118 2.208-6.945 4.91-8.504l77.153-44.544c2.7-1.56 7.12-1.56 9.82 0l77.15 44.544c2.7 1.56 4.91 5.386 4.91 8.504v89.09c0 3.117-2.208 6.943-4.91 8.503L614.902 521.2z" />

              <path d="M521.424 683.294c-2.7 1.56-7.12 1.56-9.82 0l-77.153-44.545c-2.7-1.56-4.91-5.387-4.91-8.505v-89.088c0-3.118 2.21-6.944 4.91-8.504l77.156-44.543c2.7-1.56 7.12-1.56 9.82 0l77.15 44.543c2.7 1.56 4.91 5.386 4.91 8.504v89.09c0 3.118-2.208 6.944-4.91 8.504l-77.152 44.544z" />

              <path d="M333.73 683.534c-2.7 1.56-7.118 1.56-9.818 0L246.76 638.99c-2.7-1.56-4.91-5.385-4.91-8.503v-89.09c0-3.118 2.21-6.944 4.91-8.504l77.153-44.543c2.7-1.56 7.12-1.56 9.82 0l77.152 44.543c2.7 1.56 4.91 5.386 4.91 8.504v89.088c0 3.118-2.21 6.944-4.91 8.504l-77.154 44.544z" />

              <path d="M240.09 521.345c-2.7 1.56-7.118 1.56-9.818 0l-77.153-44.543c-2.7-1.56-4.91-5.386-4.91-8.504V379.21c0-3.118 2.21-6.945 4.91-8.504l77.153-44.545c2.7-1.558 7.12-1.558 9.82 0l77.152 44.545c2.7 1.56 4.91 5.386 4.91 8.504v89.088c0 3.118-2.21 6.944-4.91 8.504l-77.154 44.543z" />

              <path d="M427.785 521.106c-2.7 1.56-7.12 1.56-9.82 0l-77.152-44.545c-2.7-1.56-4.91-5.385-4.91-8.503V378.97c0-3.118 2.21-6.945 4.91-8.504l77.153-44.545c2.7-1.558 7.12-1.558 9.82 0l77.153 44.545c2.7 1.56 4.91 5.386 4.91 8.504v89.087c0 3.118-2.21 6.944-4.91 8.504l-77.155 44.546z" />
            </g>
          </svg>
        </div>
        <form @submit.prevent="submit">
          <span>
            <input type="text" v-model="tag" placeholder="YOUR TAG" :class="{'submit-action' : submitAction}" required>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'section1',
  data() {
    return {
      tag: "",
      animateText: [
        'O',
        'O',
        'OW',
        'OW ',
        'OW S',
        'OW SH',
        'OW SHI',
        'OW SHIN',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHINE',
        'OW SHIN',
        'OW SHI',
        'OW SH',
        'OW S',
        'OW ',
        'OW',
        'O',
        ' ',
        ' ',
        'Y',
        'YO',
        'YOU',
        'YOUR',
        'YOUR ',
        'YOUR T',
        'YOUR TA',
        'YOUR TAG',
        'YOUR TAG',
        'YOUR TAG',
        'YOUR TAG',
        'YOUR TAG',
        ''
      ],
      submitTrigger: false,
      submitAction: false
    }
  },
  methods: {
    ...mapActions(['getProfileByTag']),
    animateTag(index, data, delay) {
      if (this.tag == null) return
      const _this = this;
      setTimeout(() => {
        let item = data[index];
      
          _this.tag = item;


        if (index < data.length -1) {
          index++;
          _this.animateTag(index, data, delay);
        } else {
          _this.submitTrigger = true;
        }
      }, delay)
    },
    submit() {
      if (!this.submitTrigger) return;
      const submitData = this.tag.replace('#', '-');
      this.submitAction = true;

      this.getProfileByTag(submitData).then(resp => {
        console.log(resp);
        if (resp.status == 200) {
          console.log('do something');
        }

        this.submitAction = false;
      })
    }
  },
  mounted() {
    this.animateTag(0, this.animateText, 50);
  }
}
</script>

<style>
</style>
