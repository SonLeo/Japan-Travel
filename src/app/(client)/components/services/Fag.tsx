import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function ServicesFaq() {
  return (
    <section>
      <div className="banner-question bg-[url('https://i.imgur.com/DUdSjvb.jpg')] bg-cover bg-center">
        <div className="py-24 px-3 max-w-[658px] mx-auto">
          <div className="text-center">
            <h1 className="text-[50px] font-bold text-white">F.A.Q.</h1>
            <span className=" text-[15px] text-white ">
              Rendered her for put improved concerns his. Ladies bed wisdom
              theirs mrs men months set. Everything so dispatched as it
              increasing pianoforte.
            </span>
          </div>

          <div>
            <ul>
              <li>
                <div className="py-3 px-4 text-center bg-white rounded-xl flex justify-between items-center">
                  <p>What is paid search management, and why do I need it?</p>
                  <p>
                    <FaCaretDown />
                  </p>
                  <p>
                    <FaCaretUp className="hidden" />
                  </p>
                </div>
                <ul>
                  <li>
                    In to am attended desirous raptures declared diverted
                    confined at. Collected instantly remaining up certainly to
                    necessary as. Over walk dull into son boy door went new. At
                    or happiness commanded daughters as. Is handsome an declared
                    at received in extended vicinity subjects. Into miss on he
                    over been late pain an.
                  </li>
                </ul>
              </li>
              <li>
                <p>How can paid search management benefit my business?</p>
                <p>
                  <FaCaretDown />
                </p>
                <p>
                  <FaCaretUp className="hidden" />
                </p>
                <ul>
                  <li>
                    In to am attended desirous raptures declared diverted
                    confined at. Collected instantly remaining up certainly to
                    necessary as. Over walk dull into son boy door went new. At
                    or happiness commanded daughters as. Is handsome an declared
                    at received in extended vicinity subjects. Into miss on he
                    over been late pain an.
                  </li>
                </ul>
              </li>
              <li>
                <p>What platforms do you support for paid search management?</p>
                <p>
                  <FaCaretDown />
                </p>
                <p>
                  <FaCaretUp className="hidden" />
                </p>
                <ul>
                  <li>
                    In to am attended desirous raptures declared diverted
                    confined at. Collected instantly remaining up certainly to
                    necessary as. Over walk dull into son boy door went new. At
                    or happiness commanded daughters as. Is handsome an declared
                    at received in extended vicinity subjects. Into miss on he
                    over been late pain an.
                  </li>
                </ul>
              </li>
              <li>
                <p>How do you optimize my paid search campaigns?</p>
                <p>
                  <FaCaretDown />
                </p>
                <p>
                  <FaCaretUp className="hidden" />
                </p>
                <ul>
                  <li>
                    In to am attended desirous raptures declared diverted
                    confined at. Collected instantly remaining up certainly to
                    necessary as. Over walk dull into son boy door went new. At
                    or happiness commanded daughters as. Is handsome an declared
                    at received in extended vicinity subjects. Into miss on he
                    over been late pain an.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
