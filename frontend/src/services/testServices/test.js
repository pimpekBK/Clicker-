const TEST_URL = "/test";

export async function testServerButton() {
    const data = await post(
        `${TEST_URL}/button`
    );
    if ( data.success ) {
        return data;
    }

    console.log(data.message);
    return data;
}