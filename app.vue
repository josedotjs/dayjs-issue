<template>
  <div class="container" v-if="isHydrated">
    <div class="columns">
      <div class="column">
        <label for="inputDate">Select a date</label>
        <input
          id="inputDate"
          type="date"
          class="input"
          v-model="selectedDate"
        />
      </div>
      <div class="column">
        <label for="selectLocale" class="is-block">Select a locale</label>
        <div class="select">
          <select id="selectLocale" v-model="currentLocale">
            <option v-for="locale in locales" :value="locale.value">
              {{ locale.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <h2 class="is-size-2">Formats</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Format</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="format in formats" :key="format">
              <td>{{ format }}</td>
              <td>{{ $dayjs(selectedDate).format(format) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <h2 class="is-size-2">Localized Formats</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Format</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="format in localizedFormats" :key="format">
              <td>{{ format }}</td>
              <td>{{ $dayjs(selectedDate).format(format) }}</td>
            </tr>
          </tbody>
        </table>
        <h2 class="is-size-2">Relative Time</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>fromNow()</code></td>
              <td>{{ $dayjs(selectedDate).fromNow() }}</td>
            </tr>
            <tr>
              <td><code>toNow()</code></td>
              <td>{{ $dayjs(selectedDate).toNow() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const locales = ref([
  { name: "English", value: "en" },
  { name: "Spanish", value: "es" },
  { name: "Portuguese", value: "pt" },
]);
const formats = ref([
  "YY",
  "YYYY",
  "M",
  "MM",
  "MMM",
  "MMMM",
  "D",
  "DD",
  "d",
  "dd",
  "ddd",
  "dddd",
  "H",
  "HH",
  "h",
  "hh",
  "m",
  "mm",
  "s",
  "ss",
  "SSS",
  "Z",
  "ZZ",
  "A",
  "a",
]);
const localizedFormats = ref([
  "LT",
  "LTS",
  "L",
  "LL",
  "LLL",
  "LLLL",
  "l",
  "ll",
  "lll",
  "llll",
]);
const selectedDate = ref(new Date());
const currentLocale = ref("en");
const { $dayjs } = useNuxtApp();
const prettyDate = computed(() =>
  $dayjs(new Date()).format("dddd, MMMM D, YYYY h:mm A")
);
watch(currentLocale, (newVal) => {
  $dayjs.locale(newVal);
});
</script>
