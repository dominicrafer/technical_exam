<template>
  <q-input
    v-bind="$attrs"
    v-model="value"
    :name="name"
    :type="showPassword ? 'text' : inputType"
    :label="label"
    :error="errors.length ? true : undefined"
    :error-message="errorMessage"
    :placeholder="placeholder"
    no-error-icon
    class="px-2 text-primary bg-white rounded-lg items-end"
  >
    <template #label v-if="$slots.label">
      <slot name="label"></slot>
    </template>
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </template>
    <template #append v-if="$slots.append">
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
const props = defineProps({
  label: {
    type: String,
    default: null
  },
  inputType: {
    type: String as PropType<"number" | "text" | "textarea" | "time" | "password" | "email" | "search" | "tel" | "file" | "url" | "date" | "datetime-local" | undefined>,
    default: "text"
  },
  placeholder: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    default: null
  },
  step: {
    type: String,
    default: "1"
  },
  rules: {
    type: [String, Object]
  },
  modelValue: {
    type: [String, Number] as PropType<string | number | null>
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  isDirty: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:modelValue", "update:isDirty", "change"]);

const { errorMessage, meta, errors, value, handleChange } = useField(props.name, props.rules, {
  bails: false,
  initialValue: props.modelValue,
  label: props.label ? props.label : props.name
});
watch(value, (val) => {
  emit("update:modelValue", val);
});

watch(
  meta,
  (meta) => {
    emit("update:isDirty", meta.dirty);
  },
  { deep: true }
);
</script>
