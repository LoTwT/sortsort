import type { Options as SortableOptions } from "sortablejs"
import type { MaybeRefOrGetter } from "vue"
import Sortable from "sortablejs/Sortable"
import { moveArrayElement } from "./utils"

export function useSortable<T>(
  el: MaybeRefOrGetter<HTMLElement | null>,
  source: MaybeRefOrGetter<T[]>,
  options?: MaybeRefOrGetter<SortableOptions>,
) {
  const instance = ref<Sortable | null>(null)
  const result = ref<T[]>([])

  watchEffect((onCleanup) => {
    const actualEl = toValue(el)

    if (!actualEl) return

    if (instance.value) {
      instance.value.destroy()
    }

    const actualSource = toValue(source)
    const actualOptions = toValue(options)

    result.value = actualSource

    const onInnerUpdate: SortableOptions["onUpdate"] = (e) => {
      const { oldIndex, newIndex } = e

      const data = result.value.slice()
      result.value = moveArrayElement(data, oldIndex!, newIndex!)
    }

    instance.value = new Sortable(actualEl, {
      animation: 150,
      ...actualOptions,
      onUpdate: (e) => {
        onInnerUpdate(e)
        actualOptions?.onUpdate?.(e)
      },
    })

    onCleanup(() => {
      if (instance.value) {
        instance.value.destroy()
      }
      instance.value = null
      result.value = []
    })
  })

  const reset = () => {
    result.value = toValue(source)
  }

  return {
    instance,
    result,
    reset,
  }
}
