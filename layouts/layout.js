import Sidebar from "./sidebar/sidebar";
function getLayout(page) {
  return (
    <>
      <Sidebar />
      <h1>this is a layout</h1>
      <div>{page}</div>
    </>
  );
}

export default getLayout;
