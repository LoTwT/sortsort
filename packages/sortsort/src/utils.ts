export function moveArrayElement<T>(array: T[], from: number, to: number): T[] {
  if (
    from < 0 ||
    from >= array.length ||
    to < 0 ||
    to >= array.length ||
    from === to
  ) {
    return array
  }

  const element = array.splice(from, 1)[0]
  array.splice(to, 0, element)

  return array
}
