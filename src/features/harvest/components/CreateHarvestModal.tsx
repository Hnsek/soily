import { Modal, ModalBackground } from "../../../components/Modal"
import { usePersistHarvest } from "../hooks/usePersistHarvest"
import { useHarvestAction } from "../stores/useHarvestAction"
import { HarvestForm } from "./HarvestForm"

export const CreateHarvestModal = () => {

  const { planting, action, resetAction } = useHarvestAction()

  const { createHarvest } = usePersistHarvest()
  
  const mayShow = !!planting && action === "harvest"
  
  return <Modal visible={mayShow} transparent>
      <ModalBackground className="flex flex-col justify-end">
        { <HarvestForm 
          title={planting?.plantingMaterial.name} 
          onClose={() => resetAction()}
          onSubmit={(harvest) => {
            createHarvest({...harvest, planting: planting!})
            resetAction()
          }}/>
        } 
      </ModalBackground>
    </Modal>

}
