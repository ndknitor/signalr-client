import Button from "../../components/Button/Button";
import add from '../../assets/svg/add.svg'
import metadata from '../../../signalr.json';
import TextInput from "../../components/TextInput/TextInput";

function Index() {
    const meta = metadata;
    return (
        <>
            <div className="flex w-full justify-center mb-4">
                <h1 style={{ fontSize: 38 }}>SignalR Client</h1>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex flex-row justify-center gap-x-4 w-1/4 mobile:w-3/4">
                    <div style={{ width: "70%" }}>
                        {/* <Combobox value={selectedHost} onChange={setSelectedHost}>
                            <div className="flex flex-row">
                                <div style={{ width: "90%" }}>
                                    <Combobox.Input
                                        placeholder="Host"
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                        className="w-full border-b border-transparent py-2 px-4 text-lg font-semibold bg-gray-900 text-white transition-border duration-500 focus:outline-none focus:border-indigo-500 hover:border-indigo-500 focus-visible:border-indigo-500"
                                    />
                                </div>
                                <div style={{ width: "10%" }}>
                                    <Combobox.Button className="w-10 h-full bg-indigo-500 focus:outline-none">
                                        <div className="flex justify-center items-center">
                                            <img className="w-fit" src={expandMore} />
                                        </div>
                                    </Combobox.Button>
                                </div>
                            </div>
                            <Combobox.Options
                                className="mt-2 border-t border-gray-800 bg-gray-900 text-white max-h-60 overflow-y-auto focus:outline-none">
                                {hosts.map((url) => (
                                    <Combobox.Option
                                        key={url}
                                        value={url}
                                        className="py-2 px-4 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                    >
                                        {url}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Combobox> */}
                    </div>
                    <div style={{ width: "10%" }}>
                        <div className="flex flex-row-reverse">
                            {/* <button onClick={insertHost} className="flex rounded-lg p-2 justify-center items-center bg-green-700">
                                    <img src={save} />
                                </button> */}
                        </div>
                    </div>
                    <div style={{ width: "20%" }}>
                        <Button>Connect</Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-12">
                <div className="w-9/12 justify-cente">
                    <div className="flex w-full justify-center mb-4">
                        <h4 style={{ fontSize: 24 }}>Methods</h4>
                    </div>

                    {
                        meta.map(item =>
                            <div className="flex w-full gap-x-3 rounded border-indigo-500/75 border-2 p-4 mb-8">
                                <div style={{ width: "20%" }}>
                                    <TextInput placeholder={item.name} readOnly />
                                </div>
                                <div style={{ width: "80%" }}>
                                    {
                                        item.parameters.map(parameter =>
                                            <div className="flex flex-row mb-5">
                                                <div style={{ width: "30%" }}>
                                                    <TextInput placeholder="Parameter" value={parameter} readOnly />
                                                </div>
                                                <div style={{ width: "70%" }}>
                                                    <TextInput className="w-full" placeholder="Value" />
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="flex flex-row-reverse mt-4">
                                        <button className="flex rounded-lg p-2 justify-center items-center bg-indigo-800">
                                            <img src={add} />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        )
                    }




                </div>
            </div>

            <div className="flex flex-col w-full mt-12">
                <div className="flex w-full justify-center mb-4">
                    <h4 style={{ fontSize: 24 }}>Response</h4>
                </div>
                <div className="flex w-full justify-center">
                    <div className="flex w-10/12 rounded-lg border-indigo-500/75 border-2 p-4">
                        <p>asdas</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Index