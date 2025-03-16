export async function handle500<ResponseType = any>(
  callback: () => Promise<ResponseType>
) {
  try {
    const res = await callback();
    return res;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
