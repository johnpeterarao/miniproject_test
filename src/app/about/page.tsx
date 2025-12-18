import { reliableSupportTopData, HowWeSnapInData, WhatWeStandForData, snapDiffData } from "@/constants/reliable-support-team"

export default function ReliableSupportTeam() {
    return (
        <>
        <section className="reliable_sec">
            <div className="container">
                <div className="reliable_intro">
                    <h1 data-aos="fade-up" data-aos-delay="0">{ reliableSupportTopData.title }</h1>
                    <div data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: reliableSupportTopData.body }}></div>
                </div>
                <div className="panelBoard_lists">
                    {
                        reliableSupportTopData.boardList.map((board, ind) => (
                            <div className="panelBoard_list" key={ind} data-aos="fade-up" data-aos-delay={(ind + 2) * 50}>
                                <div className="panelBoard_board">
                                    <h3>{board.title}</h3>
                                    <p>{board.text}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>

        <section className="snapIn_sec">
            <div className="container">
                <div className="snapIn_intro" data-aos="fade-up" data-aos-delay="0">
                    <h3>{HowWeSnapInData.title}</h3>
                    <p>{HowWeSnapInData.text}</p>
                </div>
                <div className="snapIn_boards">
                    {
                        HowWeSnapInData.boardData?.map((board, ind) => (
                            <div className="snapIn_board" key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50}>
                                <div className="snapIn_board_header">
                                    <h4>{board.title}</h4>
                                </div>
                                <div className="snapIn_board_body" dangerouslySetInnerHTML={{ __html: board.body }}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section className="wws_sec">
            <div className="container">
                <div className="wws_intro" data-aos="fade-up" data-aos-delay="0">
                    <h3>{ WhatWeStandForData.title}</h3>
                    <p>{ WhatWeStandForData.text}</p>
                </div>
                <div className="wws_listings">
                    {
                        WhatWeStandForData.items.map((item, ind) => (
                            <div className="wws_card" key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50}>
                                <div className="wws_card_header">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="wws_card_body">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        <section className="snap_diff">
            <div className="container">
                <div className="snap_intro" data-aos="fade-up" data-aos-delay="0">
                    <h3>{snapDiffData.title}</h3>
                    <p>{snapDiffData.text}</p>
                </div>
                <div className="snap_list">
                    <ul>
                        {
                            snapDiffData.lists?.map((list, ind) => (
                                <li key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 50}>{list}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="snap_brushed" dangerouslySetInnerHTML={{ __html: snapDiffData.outro }} data-aos="fade-up" data-aos-delay="100">
                    
                </div>
                <div className="snap_action" data-aos="fade-up" data-aos-delay="150">
                    <a href={snapDiffData.buttonLink} className={`btn btn-${snapDiffData.buttonColor}`}>{snapDiffData.buttonText}</a>
                </div>
            </div>
        </section>
        </>
    )
}