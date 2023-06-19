import  OptionEllipsis  from "../../assets/icon"

function Header() {
//     const svgString = new XMLSerializer().serializeToString(<OptionEllipsis />);
//   const dataURL = `data:image/svg+xml;base64,${btoa(svgString)}`;
  return (
    <header className="fixed md:flex justify-between items-center w-full h-[6rem] p-[1.5rem] hidden bg-white dark:bg-[#2B2C37] border-b border-[#E4EBFA] dark:border-[#3E3F4E] px-[3rem] z-20">
    <hr className="border-[0.5px] border-[#E4EBFA] dark:border-[#3E3F4E] absolute h-full translate-x-[15.95rem]" />

    <div className="flex gap-[1rem] items-center w-[19rem] cursor-pointer">
      <img src={OptionEllipsis} alt="logo" className="h-[1.6rem]" />
      <h1 className="text-[2rem] font-bold dark:text-white">Kanban</h1>
    </div>

    <h1 className="absolute left-[20.5rem] text-[1.5rem] dark:text-white font-semibold grid place-items-center tracking-wide">
      {/* {boardState[activeBoardIndex]?.name} */}
      Launch
    </h1>
    <div className="flex gap-[1.5rem]">
      <button
        className="bg-[#635FC7] hover:bg-[#A8A4FF] duration-200 flex justify-center items-center gap-[0.5rem] w-[10rem] h-[3rem] rounded-full"
      >
        <div>
          <img src={OptionEllipsis} alt="" />
        </div>
        <p className="text-white font-semibold">Add New Task</p>
      </button>
      <div
        className="hover:bg-[#828fa349] w-[1.2rem] h-[2.5rem] grid place-items-center translate-y-1 rounded-t-full rounded-b-full duration-200 cursor-pointer"
      >
        <img src={<OptionEllipsis/>} alt="ellipsis" />
      </div>
      {/* {editDeleteModal && (
        <div className="absolute bg-white dark:bg-[#20212C] w-[12rem] top-[5.5rem] pl-[1rem] py-[1rem] flex flex-col gap-[1rem] rounded-lg shadow-input-shadow dark:shadow-input-shadow-dark">
          <p
            onClick={() => {
              setEditDeleteModal(false);
              dispatch(toogleEditBoardModal(true));
            }}
            className="text-[#828FA3] cursor-pointer"
          >
            Edit Board
          </p>
          <p
            onClick={() => {
              setEditDeleteModal(false);
              dispatch(toogleDeleteBoardModal(true));
            }}
            className="text-[#EA5555] cursor-pointer"
          >
            Delete Board
          </p>
        </div>
      )} */}
    </div>
  </header>
  )
}

export default Header