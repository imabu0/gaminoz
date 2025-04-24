function Category(props) {
  return (
    <div className="flex flex-col items-center justify-center w-[60px] h-[50px] md:w-[100px] md:h-[90px] border-b-2 border-[#e79e0d] gap-1 md:gap-2 rounded-[10px] cursor-pointer hover:scale-110 transition-all">
      <div>
        <img src={props.icon} alt="icon" className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
      </div>
      <div className="text-[10px] md:text-[14px]">{props.title}</div>
    </div>
  );
}
export default Category;
