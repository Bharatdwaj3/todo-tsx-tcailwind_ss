type HeadProps = {
  name:string;
  desc:string;
  age:number;
}

function Solar({name,desc,age}: HeadProps) {
  return (
    <>
      <div>{name},{desc},{age}</div>
    </>
  )
}

export default Solar