import './ListSideBar.scss'

function ListSideBar({Title, array}) {
  return (
    <>
      <h5 className="sidebar-subHeader"> {Title}</h5>
      <div className='subHeader-container'> 
        {array.map((item, i) => (
        <div className='subHeader-list' key = {i}>
             <img className='subHeader-icon' src={item.icon} alt = {`${item.des} logo`} />
             <p>{item.des}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default ListSideBar;
