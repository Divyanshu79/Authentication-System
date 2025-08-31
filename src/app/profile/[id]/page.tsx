'use client';


export default function User404handling({ params }: any) {
    return (<>
        <div className="container items-center" >
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-9xl">404 Error</h1>
                    <h2 className="text-7xl">{params.id}</h2>
                    <p className="text-2xl bg-gray-600 text-shadow-fuchsia-600">\item The page you are looking for does not exist.
                        \item You may have entered an incorrect URL.
                        \item You may have clicked on a broken link.
                        \item You may have tried to access a page that is not yet available.
                    </p>
                </div>
            </div>
        </div>
    </>)
}