import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionList from "../../components/AccordionList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FilterPanel from "../../components/FilterPanel";
import OkrListHeader from "../../components/OkrListHeader";
import OkrListItem from "../../components/OkrListItem";
import getOkrList from "./actions";
import { setOkrFilter } from "./reducer";
import { getCategories, getNestedOkrList, getOkrError, getOkrLoading } from "./selectors";
import Modal from "../../components/Modal/Modal";
import OkrDetails from "../../components/OkrDetails/OkrDetails";

const OkrList = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const okrList = useSelector(getNestedOkrList);
  const isLoading = useSelector(getOkrLoading);
  const okrError = useSelector(getOkrError);
  const okrCategories = useSelector(getCategories);

  const categoryOptions = useMemo(() => {
    return [
      { id: '', title: 'All' },
      ...okrCategories.map(item => ({
        id: item.toLowerCase(),
        title: item
      }))
    ];
  }, [okrCategories]);

  useEffect(() => {
    const func = async () => {
      dispatch(getOkrList());
    }
    func();
  }, [dispatch]);

  const onFilterChange = (id, value) => {
    dispatch(setOkrFilter({ id, value }));
  }

  return (
    <div className="okr-list">
      {/* Loading */}
      {isLoading && <Loader />}
      {/* Success */}
      {!isLoading && !okrError && (
        <>
          <FilterPanel
            filters={[{ id: 'category', title: 'OKR Category', options: categoryOptions }]}
            onChange={onFilterChange}
          />
          <AccordionList
            items={okrList}
            renderHeader={OkrListHeader}
            renderItem={OkrListItem}
            onItemClick={(item, parent) => {
              setModalOpen(true);
              setModalData({ item, parent });
            }}
          />
        </>
      )}
      {/* Error */}
      {
        !isLoading && okrError && (
          <Message type="error">Something went wrong!</Message>
        )
      }
      {modalOpen && (
        <Modal setOpen={setModalOpen} title="Objective Details">
          <OkrDetails {...modalData} />
          {/* This is a modal */}
        </Modal>
      )}
    </div>
  );
};

export default OkrList;