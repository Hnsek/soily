import { useEffect, useState } from "react"
import { Modal, ModalBackground } from "../../../components/Modal"
import { PlantingMaterial } from "../../../database/models/planting-material"
import { PlantingForm } from "./PlantingForm"

type CreatePlantingModalProps = {
  plantingMaterial?: PlantingMaterial
}
export const CreatePlantingModal = ({ plantingMaterial } : CreatePlantingModalProps) => {
  const [visible, setVisible] = useState(!!plantingMaterial)

  useEffect(() => {
    setVisible(!!plantingMaterial)
  }, [plantingMaterial])

  return <Modal visible={visible} transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingForm
          title={plantingMaterial?.name}
          onClose={() => setVisible(false)}
        />
      </ModalBackground>
    </Modal>

}
