<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-row :gutter="24">
        <a-col v-for="i in 10" :key="i" :span="8">
          <a-form-item :label="`Field ${i}`">
            <a-input
              v-decorator="[
                `field-${i}`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]"
              placeholder="placeholder"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  }
};
</script>

<style>
</style>