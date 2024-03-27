import { star } from "../assets/icons";

export  function ReviewCard({imgURL, customerName, rating, feedback}) {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="star" className="object-contain m-0" />
            <p  className="font-montserrat text-slate-gray text-xl">{rating}</p>
            <h3 className="mt-1 font-palanquin text-3xl tenxt-center font-bold">{customerName}</h3>
        </div>
    </div>
  )
}
