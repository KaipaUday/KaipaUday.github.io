<script lang="js">
  import Select, { Option } from '@smui/select';
  let langs = ['En', 'De'];
  let value = $state(langs[0]);
</script>

<style>
.lang-menu {
  position: absolute;
  top: 5px;  /* Position from top */
  right: 5px;  /* Position from right */
  font-size: 8px;  /* Very small font size */
  width: auto;
  z-index: 999; 
}

/* Override default select input style */
.smui-select {
  font-size: 8px;  /* Extremely small font size */
  width: 18px;  /* Narrower width to fit 2 letters */
  padding: 0;  /* No padding */
  min-width: 18px;  /* Enforce minimum width */
  max-width: 18px;  /* Restrict maximum width */
}

.smui-select__input {
  text-align: center;  /* Center the selected text */
  padding: 0;  /* Remove padding */
  width: 100%;  /* Fill the container */
}

/* Restrict the dropdown menu width */
.smui-select__menu {
  width: 18px;  /* Make dropdown even more compact */
  max-width: 18px;  /* Max width for dropdown */
  font-size: 8px;  /* Small font size for dropdown items */
}

.smui-select__menu .smui-select__option {
  width: 18px;  /* Narrow the option width */
  text-align: center;  /* Center the option text */
  padding: 2px 0;  /* Reduce padding */
}
</style>

<div class="lang-menu">
<Select bind:value label="Lang">
  {#each langs as lang}
    <Option value={lang}>{lang}</Option>
  {/each}
</Select>
</div>
