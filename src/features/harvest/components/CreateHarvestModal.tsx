import { Modal, ModalBackground } from "../../../components/Modal"
import { usePersistPlanting } from "../../plantings/hooks/usePersistPlanting"
import { usePersistHarvest } from "../hooks/usePersistHarvest"
import { useHarvestAction } from "../stores/useHarvestAction"
import { HarvestForm } from "./HarvestForm"

export const CreateHarvestModal = () => {

  const { planting, action, resetAction } = useHarvestAction()
  const { createHarvest } = usePersistHarvest()
  const { updatePlanting } = usePersistPlanting()

  const mayShow = !!planting && action === "harvest"
  
  return <Modal visible={mayShow} transparent>
      <ModalBackground className="flex flex-col justify-end">
      {planting && <HarvestForm 
          title={planting.plantingMaterial.name} 
          onClose={() => resetAction()}
          onSubmit={(harvest) => {
            createHarvest({...harvest, planting})
            updatePlanting(planting._id, {quantity: planting.harvest(harvest.quantity)})
            resetAction()
          }}/>}
      </ModalBackground>
    </Modal>

}
