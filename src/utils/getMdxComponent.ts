export default async function getMdxComponent(courseId: string) {
  try {
    const component = await import(`@/content/${courseId}.mdx`);
    return component.default;
  } catch (error) {
    console.error('Failed to load course content:', error);
    return null;
  }
}
