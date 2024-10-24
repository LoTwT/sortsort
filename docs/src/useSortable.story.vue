<script setup lang="ts">
import { useSortable } from "sortsort"
import Preview from "./preview.vue"

const data = Array.from({ length: 6 }).map((_, i) => `Item${i + 1}`)

const simpleListData = ref(data)

const simpleListRef = useTemplateRef("simpleListRef")
const { result } = useSortable(simpleListRef, simpleListData, {
  ghostClass: "bg-blue!",
})
</script>

<template>
  <Story>
    <Variant title="simple list" autoPropsDisabled>
      <div ref="simpleListRef" class="bg-gray-100 p-4 flex flex-col gap-2">
        <div
          v-for="item in result"
          :key="item"
          class="h-12 bg-gray-200 rounded-md flex items-center pl-4"
        >
          {{ item }}
        </div>
      </div>

      <Preview :data="result" />

      <template #controls></template>

      <template #source>
        <textarea v-pre>
          <script setup lang="ts">
            import { useSortable } from "sortsort"

            const data = Array.from({ length: 6 }).map((_, i) => `Item${i + 1}`)

            const simpleListData = ref(data)

            const simpleListRef = useTemplateRef("simpleListRef")
            const { result } = useSortable(simpleListRef, simpleListData, {
              ghostClass: "bg-blue",
            })
            </script>

          <template>
            <div ref="simpleListRef" class="bg-gray-100 p-4 flex flex-col gap-2">
              <div
                v-for="item in result"
                :key="item"
                class="h-12 bg-gray-300 rounded-md flex items-center pl-4"
              >
                {{ item }}
              </div>
            </div>
          </template>
        </textarea>
      </template>
    </Variant>
    <Variant>2</Variant>
  </Story>
</template>
