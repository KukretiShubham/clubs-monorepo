<template>
  <div class="bg-cover bg-center">
    <h3 class="my-8 text-2xl">Creators</h3>
    <div v-if="creators.length > 0" class="border-dp-black-200 rounded border">
      <ul role="list">
        <li
          v-for="creator in creators"
          :key="creator.ownerAddress"
          class="border-dp-black-200 flex items-center border border-x-0 border-t-0 outline-white first:border-solid last:border-none"
        >
          <Avator
            :accountAddress="creator.accountAddress"
            :displayName="true"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { providers } from 'ethers'
import { getBalances } from '../../fixtures/dev-kit'
import Avator from './Avator.vue'

export default {
  data() {
    return {
      creators: [],
      propertyAddress: import.meta.env.PUBLIC_PROPERTY_ADDRESS,
    }
  },
  async created() {
    const providerURL = import.meta.env.PUBLIC_WEB3_PROVIDER_URL
    const provider = new providers.JsonRpcProvider(providerURL)
    const balances = await getBalances(provider, this.propertyAddress)
    this.creators = balances.map((balance) => ({
      accountAddress: balance.account,
    }))
  },
  components: {
    Avator,
  },
}
</script>
