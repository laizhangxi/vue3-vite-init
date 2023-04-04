<template>
  <div @click="sendRequest" class="f-c-c">发送请求</div>
</template>

<script setup lang="ts">
import { login } from "@/http/api"
const sendRequest = () => {
  let params = {
    account: 'system',
    password: 'c4ca4238a0b923820dcc509a6f75849b'
  }
  login(params).then((res: any) => {
    if (res) {
      localStorage.setItem("token", res)
    }
  })
}
</script>



<style scoped></style>
