function CenterInfo({children}){
    return <div className="flex justify-center w-full h-full">
        <div className="w-full max-w-[1280px] px-3 md:px-0 py-4 h-full">
            {children}
        </div>
    </div>
}

export default CenterInfo